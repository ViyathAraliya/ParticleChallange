const particles=[];
const timesToMove1px_x=[]
const timesToMove1px_y=[]

//initializeng particles
for (let i=0;i<10;i++){
    const particle=document.createElement('div');
    let length=20*(1+Math.random());
    particle.style.width=`${length}px`;
    particle.style.height=`${length}px`;
    particle.style.position='absolute';
    particle.style.borderRadius=`${length/2}px`;
    let xPosition=window.innerWidth*Math.random();
    let yPostion=window.innerHeight*Math.random();
    particle.style.left=`${xPosition}px`;
    particle.style.top=`${yPostion}px`;
    particle.style.backgroundColor=`rgb(${225*Math.random()} ${225*Math.random()} ${225*Math.random()})`;

    let timeToMove1px_x=1+(20*Math.random());
    let timeToMove1px_y=1+(20*Math.random());

    timesToMove1px_x.push(timeToMove1px_x);
    timesToMove1px_y.push(timeToMove1px_y);
    particles.push(particle);

    document.body.append(particle);
}

function moveParticle_x(particle,timeToMove1px_x){
    setInterval(()=>{
        particle.style.left=`${
            parseInt(particle.style.left.substring(0,particle.style.left.length-2))+1}px`;
        // particle.style.top=`${
        //     parseInt(particle.style.top.substring(0,particle.style.top.length-2))+1}px`;
    },timeToMove1px_x)
}


function moveParticle_y(particle,timeToMove1px_y){
    setInterval(()=>{
        particle.style.top=`${
            parseInt(particle.style.top.substring(0,particle.style.top.length-2))+1}px`;
        // particle.style.top=`${
        //     parseInt(particle.style.top.substring(0,particle.style.top.length-2))+1}px`;
    },timeToMove1px_y)
}
moveParticle_x(particles[0],timesToMove1px_x[0]);
moveParticle_y(particles[0],timesToMove1px_y[0]);

// 1/time

