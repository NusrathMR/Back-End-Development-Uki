function findpalindrome(Num){
    let num=Num;
    let palindrome=0;

    // while(num>0){
    //     let firstdigit= num%10;
    //     palindrome=palindrome+firstdigit;
    //     if (palindrome==firstdigit){
    //         console.log(palindrome);
    //     }
    //     break;
    // }

    while(num>0){
        let digit= num%10;
        palindrome=palindrome+digit;
        if (palindrome==digit){
            console.log(palindrome);
        }
    }
}
findpalindrome(505);