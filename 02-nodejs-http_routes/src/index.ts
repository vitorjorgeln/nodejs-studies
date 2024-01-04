interface User {
    birhtYear: number
}

function isMajority(user: User){
    return new Date().getFullYear() - user.birhtYear >= 21
}

isMajority({
    birhtYear: 2006
})