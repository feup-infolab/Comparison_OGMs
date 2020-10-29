package cidoc

import groovy.transform.CompileStatic
import org.neo4j.ogm.annotation.Relationship

@CompileStatic
trait E1_CRM_Entity_t {

    static Object P1_is_identified_by_t = E42_Identifier_t.class

    @Relationship(type="P1_is_identified_by")
    private ArrayList<E42_Identifier_t> P1_is_identified_by = new ArrayList<>()

    ArrayList<E42_Identifier_t> getP1_is_identified_by(){
        return P1_is_identified_by
    }

    static Object P48_has_preferred_identifier_t = E42_Identifier_t.class

    @Relationship(type="P48_has_preferred_identifier")
    private ArrayList<E42_Identifier_t> P48_has_preferred_identifier = new ArrayList<>()

    ArrayList<E42_Identifier_t> getP48_has_preferred_identifier(){
        return P48_has_preferred_identifier
    }


}