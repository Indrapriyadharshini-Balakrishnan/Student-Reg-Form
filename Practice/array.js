let name,ingredients,instr

let recipes=[
    {
        name:"vada",
        ingredients:["ulunthu","oil","onion"],
        instr:["grind soaked ulunthu","heat oil","make shape and fry in oil"]

    },
    {
        name:"coffee",
        ingredients:["coffee powder","milk","sugar"],
        instr:["boil milk","add coffee powder","add sugar and mix"]

    },

    {
        name:"tea",
        ingredients:["coffee powder","milk","sugar"],
        instr:["boil water","add tea powder","madd sugar and milk","boil well 10 min"]

    }


]
for(let count=0;count<recipes.length;count++)
{
    console.log("Recipe Name : "+recipes[count].name)
}
