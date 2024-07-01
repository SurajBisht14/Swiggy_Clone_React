function yo(strName){
    if(Math.abs(strName.indexOf('a')-strName.indexOf('b'))-1 ===3){
        return(true)
    }
    return(false)
}
console.log(yo("chaineb"))