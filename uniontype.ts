//union | OR 

// using  the | we pass either one type or other type which decleard

function unionfun (code: string|number){

    console.log(`using two different type value for same para variable  ${code}`);

}

unionfun("birthdate:");
unionfun(30);


//union type errors

function unionfunction (code: string|number){

    //console.log(`using two different type value for same para variable  ${code.toUpperCase()}`);
//   Property 'toUpperCase' does not exist on type 'number'
}

unionfunction("birthdate:");
unionfunction('a');
