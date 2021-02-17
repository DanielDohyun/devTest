export function isValidWalk(walk: string[]) {  
    
    let sum = 0;
        
    //Check whether travel will take exactly 10 mins
    if (walk.length == 10) {

        // for (var i = 0; i < walk.length; i++) {
        //     if (walk[i] === 'n' || 'e') {
        //         sum += 1;
        //     } else {
        //         sum -= 1;
        //     }
        // }

        for (var i = 0; i < walk.length; i++) {
            if (walk[i] === 'n') {
                sum += 1;
            } else if (walk[i] === 'e') {
                sum += 1;
            }
            else if (walk[i] === 's') {
                sum -= 1;
            }
            else if (walk[i] === 'w') {
                sum -= 1;
            }
        }

        if (sum === 0) {
            return true;
        } else return false;

    } else return false;

}

