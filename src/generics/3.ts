type typeA={
    name:string;
}
type typeB={
    weight:number;
}
function merge <T extends object,U extends object>(objA:T, objB:U): T & U {
    return Object.assign({},objA, objB);
    }
    
    let resultMerge=merge<typeA,typeB>({name:'Iryna'},{weight:57});
