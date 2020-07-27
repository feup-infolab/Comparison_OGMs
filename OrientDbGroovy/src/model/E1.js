ogm = require('ogm')


@ogm.model("Person")
class Person extends ogm.V {

    @ogm.property(String)
    name = this.name;

    @ogm.property(Number)
    age = this.age;
}
