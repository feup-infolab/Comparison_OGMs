from _pytest import unittest
from neomodel import config, StructuredNode, StringProperty, UniqueIdProperty, RelationshipTo, ZeroOrOne, ZeroOrMore, \
    AttemptedCardinalityViolation

config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'


class E1_CRM_Entity(StructuredNode):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P1_is_identified_by = RelationshipTo(
        "E42_Identifier",
        "P1_is_identified_by",
        cardinality=ZeroOrMore
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
        "P130_shows_features_of",
        cardinality=ZeroOrMore
    )


class E71_Man_Made_Thing(E70_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P102_has_title = RelationshipTo(
        "E35_Title",
        "P102_has_title",
        cardinality=ZeroOrMore
    )


class E35_Title(E71_Man_Made_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


class E42_Identifier(E71_Man_Made_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


class E18_Physical_Thing(E70_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()
    P156_occupies = RelationshipTo(
        "E53_Place",
        "P156_occupies",
        cardinality=ZeroOrMore
    )


class E24_Physical_Human_Made_Thing(E18_Physical_Thing, E71_Man_Made_Thing):
    name = StringProperty(unique_index=True, required=True)
    uid = UniqueIdProperty()


class TestNeoModel(unittest.TestCase):
    def testModel(self):
        e24 = E24_Physical_Human_Made_Thing(name="Tokyo Tower").save()
        e42_1 = E42_Identifier(name="Id1").save()
        e42_2 = E42_Identifier(name="Id2").save()
        e1 = E1_CRM_Entity(name="Entity E1").save()
        e35 = E35_Title(name="Tokyo Tower").save()
        e70 = E70_Thing(name="Eiffel Tower").save()
        e53 = E53_place(name="Tokyo").save()

        e24.P1_is_identified_by.connect(e42_1)
        e24.P1_is_identified_by.connect(e42_2)
        e24.P102_has_title.connect(e35)
        e24.P130_shows_features_of.connect(e70)
        e24.P156_occupies(e53)
        e24.P48_has_preferred_identifier.connect(e42_1)

        self.assertRaises(AttemptedCardinalityViolation,  e24.P48_has_preferred_identifier.connect, e42_2)
        self.assertRaises(ValueError, e24.P130_shows_features_of.connect, e1)