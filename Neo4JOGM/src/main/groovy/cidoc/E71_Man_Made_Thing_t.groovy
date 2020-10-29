package cidoc

import org.neo4j.ogm.annotation.Relationship

trait E71_Man_Made_Thing_t implements E70_Thing_t{

    static Object P102_has_title_t = E35_Title_t.class

    @Relationship(type="P102_has_title")
    private ArrayList<E35_Title_t> P102_has_title = new ArrayList<>()

    ArrayList<E35_Title_t> getP102_has_title(){
        return P102_has_title
    }
}