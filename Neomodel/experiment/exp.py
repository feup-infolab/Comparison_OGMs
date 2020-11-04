import time

from _pytest import unittest
import unittest
from neomodel import config, StructuredNode, StringProperty, UniqueIdProperty, RelationshipTo, ZeroOrOne, ZeroOrMore, \
    AttemptedCardinalityViolation, db, clear_neo4j_database

config.DATABASE_URL = 'bolt://neo4j:password@localhost:7687'


class E1_CRM_Entity(StructuredNode):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P1_is_identified_by = RelationshipTo(
        "E42_Identifier",
        "P1_is_identified_by"
    )
    P48_has_preferred_identifier = RelationshipTo(
        "E42_Identifier",
        "P48_has_preferred_identifier",
        cardinality=ZeroOrOne
    )


class E53_place(E1_CRM_Entity):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


class E70_Thing(E1_CRM_Entity):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P130_shows_features_of = RelationshipTo(
        "E70_Thing",
        "P130_shows_features_of"
    )


class E71_Man_Made_Thing(E70_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P102_has_title = RelationshipTo(
        "E35_Title",
        "P102_has_title"
    )


class E35_Title(E71_Man_Made_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


class E18_Physical_Thing(E70_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P156_occupies = RelationshipTo(
        "E53_place",
        "P156_occupies"
    )


class E42_Identifier(E71_Man_Made_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


class E24_Physical_Human_Made_Thing(E18_Physical_Thing, E71_Man_Made_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


times = []
for y in range(0, 5):
    ts1 = time.time()
    for x in range(0, 1000):
        print("try" + x.__str__())
        ts4 = time.time()
        e24 = E24_Physical_Human_Made_Thing(name="Tokyo Tower").save()
        print(time.time()-ts4)
        ts5 = time.time()
        e42_1 = E42_Identifier(name="Id1").save()
        print(time.time() - ts5)
        ts6 = time.time()
        e42_2 = E42_Identifier(name="Id2").save()
        print(time.time() - ts6)
        ts7 = time.time()
        e1 = E1_CRM_Entity(name="Entity E1").save()
        print(time.time() - ts7)
        ts8 = time.time()
        e35 = E35_Title(name="Tokyo Tower").save()
        print(time.time() - ts8)
        ts9 = time.time()
        e70 = E70_Thing(name="Eiffel Tower").save()
        print(time.time() - ts9)
        ts10 = time.time()
        e53 = E53_place(name="Tokyo").save()
        print(time.time() - ts10)
        ts11 = time.time()

        e24.P1_is_identified_by.connect(e42_1)
        print(time.time() - ts11)
        ts12 = time.time()
        e24.P1_is_identified_by.connect(e42_2)
        print(time.time() - ts12)
        ts13 = time.time()
        e24.P102_has_title.connect(e35)
        print(time.time() - ts13)
        ts14 = time.time()
        e24.P130_shows_features_of.connect(e70)
        print(time.time() - ts14)
        ts15 = time.time()
        e24.P48_has_preferred_identifier.connect(e42_1)
        print(time.time() - ts15)
        clear_neo4j_database(db)
    ts2 = time.time()
    ts3 = ts2 - ts1
    times.append(ts3)
print(times)
