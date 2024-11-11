
function processData(input){
    const f=input.trim().split("").map(Number)

    let unique=[]
    for(int i=0;i<f.length;i++;){
        let isDuplicate=false;
        for(let j=0;j<unique.length;j++){
            if(f[i]===unique[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            unique.push(f[i]);
        }
    }
    let n=unique.length;
    for(let i=0;i<n;i++){
      let swapped=false;
      for(let j=0;j<n-i-1;j++){
        if(unique[j]>unique[j+1]){
          let temp=unique[j];
          unique[j]=unique[j+1];
          unique[j+1]=temp;
          swapped=true;
        }
      }
      if(!swapped){
        break;
      }
    }
    console.log(unique.join(""));
}