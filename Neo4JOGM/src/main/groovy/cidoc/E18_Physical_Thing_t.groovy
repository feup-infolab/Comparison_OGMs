package cidoc

import org.neo4j.ogm.annotation.Relationship

trait E18_Physical_Thing_t implements E70_Thing_t{

    static Object P156_occupies_t = E53_Place_t.class

    @Relationship(type="P156_occupies")
    private ArrayList<E53_Place_t> P156_occupies = new ArrayList<>()

    ArrayList<E53_Place_t> getP156_occupies(){
        return P156_occupies
    }
}
