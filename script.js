function stringChop(str, size) {
  // your code here
	let res=[];
	let k=0;
let strlength=str.length;
	let n=Math.floor(strlength/size);
	for(let i=0;i<n;i++){
	let tempres="";
		for(let j=k;j<k+size;j++){
			tempres+=str[j];
		}
		res.push(tempres);
		k+=size;
	}
	let tempres="";
	while(k<strlength){
		tempres+=str[k++];
	}
	if(tempres.length>0)
	res.push(tempres);
	return res;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
