# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

language1 = Language.create(title: "Ruby", proficiency: "Moderate")
language2 = Language.create(title: "Javascript", proficiency: "Beginner")

note1 = language1.notes.build(topic:"Migration Syntax", content: "create_table :{plural name} do |t|\nt.data_type :{fieldname}\n end")
note1.save
note2 = language2.notes.build(topic:"Ensuring DOM loads before scripts run", content: "1. Add defer to the script tag\n 2.Place script link at the end of the HTML doc]\n 3.Nest script in an event listener function that runs on DOMloading")
note2.save
