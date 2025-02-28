const particles=[];
const timesToMove1px_x=[]
const timesToMove1px_y=[]
const numberOfParticles=500;
let xIncrements=[];
let yIncrements=[];
let xDirectionPositives=[];
let yDirectionPositives=[];
// let xIncrement=1;
// let yIncrement=1;

//initializeng particles
for (let i=0;i<numberOfParticles;i++){
    const particle=document.createElement('div');
    let length=5*(1+Math.random());
    particle.style.width=`${length}px`;
    particle.style.height=`${length}px`;
    particle.style.position='absolute';
    particle.style.borderRadius=`${length/2}px`;
    let xPosition=window.innerWidth*Math.random();
    let yPostion=window.innerHeight*Math.random();
    particle.style.left=`${xPosition}px`;
    particle.style.top=`${yPostion}px`;
    particle.style.backgroundColor=`rgb(${225*Math.random()} ${225*Math.random()} ${225*Math.random()})`;

    xIncrements.push(1);
    yIncrements.push(1);

    let timeToMove1px_x=1+(20*Math.random());
    let timeToMove1px_y=1+(20*Math.random());

    timesToMove1px_x.push(timeToMove1px_x);
    timesToMove1px_y.push(timeToMove1px_y);
    particles.push(particle);

    document.body.append(particle);
}

function moveParticle_x(particle,timeToMove1px_x,particleNumber){
    xDirectionPositives[particleNumber]=true;

    setInterval(()=>{
        let particleLeft=particle.style.left.substring(0,particle.style.left.length-2);
        particle.style.left=`${parseInt(particleLeft)+xIncrements[particleNumber]}px`;
        if (innerWidth<=parseInt(particleLeft) && xDirectionPositives[particleNumber]){
            xIncrements[particleNumber]=-xIncrements[particleNumber];
            xDirectionPositives[particleNumber]=!xDirectionPositives[particleNumber];
        }
        if (parseInt(particleLeft)<=0 && !xDirectionPositives[particleNumber]){

            xIncrements[particleNumber]=-xIncrements[particleNumber];
            xDirectionPositives[particleNumber]=!xDirectionPositives[particleNumber];
        }

    },timeToMove1px_x)
}


function moveParticle_y(particle,timeToMove1px_y,particleNumber){
    yDirectionPositives[particleNumber]=true;
    setInterval(()=>{
        let particleTop=particle.style.top.substring(0,particle.style.top.length-2);
        particle.style.top=`${parseInt(particleTop)+yIncrements[particleNumber]}px`;
        if(innerHeight<=parseInt(particleTop) && yDirectionPositives[particleNumber]){
            yIncrements[particleNumber]=-yIncrements[particleNumber]
            yDirectionPositives[particleNumber]=!yDirectionPositives[particleNumber];
        }

        if (parseInt(particleTop)<=0 && !yDirectionPositives[particleNumber]){

            yIncrements[particleNumber]=-yIncrements[particleNumber];
            yDirectionPositives[particleNumber]=!yDirectionPositives[particleNumber];
        }


    },timeToMove1px_y)
}

//set movement for particles
for (let i=0;i<numberOfParticles;i++){
    moveParticle_x(particles[i],timesToMove1px_x[i],i);
    moveParticle_y(particles[i],timesToMove1px_y[i],i);
}

