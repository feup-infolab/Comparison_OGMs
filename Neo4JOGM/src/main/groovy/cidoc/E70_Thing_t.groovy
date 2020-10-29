package cidoc

import org.neo4j.ogm.annotation.Relationship

trait E70_Thing_t implements E1_CRM_Entity_t{

    static Object P130_shows_features_of_t = E70_Thing_t.class

    @Relationship(type="P130_shows_features_of")
    private ArrayList<E70_Thing_t> P130_shows_features_of = new ArrayList<>()

    ArrayList<E70_Thing_t> getP130_shows_features_of(){
        return P130_shows_features_of
    }
}