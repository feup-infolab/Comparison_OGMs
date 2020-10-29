import cidoc.E1_CRM_Entity
import cidoc.E24_Physical_Human_Made_Thing
import cidoc.E35_Title
import cidoc.E42_Identifier
import cidoc.E53_place
import cidoc.E70_Thing
import cidoc.Entity
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.neo4j.harness.junit.Neo4jRule
import org.neo4j.ogm.session.Session
import org.neo4j.ogm.config.Configuration
import org.neo4j.ogm.session.SessionFactory


class NodeEntitiesTest {
    @Rule
    @Delegate(interfaces = false)
    public Neo4jRule neoServer = new Neo4jRule()

    private Session session

    @Before
    void setup() throws Exception{
        Configuration configuration = new Configuration.Builder().uri(neoServer.boltURI().toString()).build()
        SessionFactory sessionFactory = new SessionFactory(configuration, "cidoc")
        session = sessionFactory.openSession()
        session.purgeDatabase()


    }


    @Test
    void relationshipTest() {


        session.purgeDatabase()
        E1_CRM_Entity e1 = new E1_CRM_Entity()
        E24_Physical_Human_Made_Thing e24 = new E24_Physical_Human_Made_Thing();
        E42_Identifier e42_1 = new E42_Identifier()
        E42_Identifier e42_2 = new E42_Identifier()
        E35_Title e35 = new E35_Title()
        E70_Thing e70 = new E70_Thing()
        E53_place e53 = new E53_place()

        e24.p1_is_identified_by.add(e42_1)
        e24.p1_is_identified_by.add(e42_2)
        e24.p102_has_title.add(e35)
        e24.p130_shows_features_of.add(e70)
        e24.p156_occupies.add(e53)
        e24.p48_has_preferred_identifier.add(e42_1)
        e24.p48_has_preferred_identifier.add(e42_2)
        //e24.p130_shows_features_of.add(e1)


        session.save(e1)
        session.save(e24)
        session.save(e42_1)
        session.save(e42_2)
        session.save(e35)
        session.save(e53)
        session.save(e70)



        Collection<Entity> entities= session.loadAll(Entity)

        assert entities.size() == 7

       // Collection<E1_Crm_Entity> e1s = session.loadAll(E1_Crm_Entity)
        //ArrayList<E1_Crm_Entity> first = (E1_Crm_Entity[]) e1s.toArray()
        //assert first.get(0).p1.get(0) == e41

        //session.purgeDatabase()

    }
}
