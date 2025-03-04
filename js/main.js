const particles=[];
const timesToMove1px_x=[]
const timesToMove1px_y=[]
const numberOfParticles=50;
let xIncrements=[];
let yIncrements=[];
let xDirectionPositives=[];
let yDirectionPositives=[];
document.body.style.backgroundColor="black";

 const circle=document.createElement('h1');
const radius=30;
 circle.style.width=`${radius}px`;
 circle.style.height=`${radius}px`;

 circle.style.borderRadius=`${length/2}px`
circle.style.position=`absolute`
circle.style.backgroundColor='green'
circle.style.left = `${innerWidth/2-radius/2}px`;
 circle.style.top=`${innerHeight/2-radius/2}px`;
document.body.append(circle);

let circleFound=false;



//initializeng particles
for (let i=0;i<numberOfParticles;i++){
    const particle=document.createElement('div');
    let length=15*(1+Math.random());
    particle.style.width=`${length}px`;
    particle.style.height=`${length}px`;
    particle.style.position='absolute';
    particle.style.borderRadius=`${(length/2)*Math.random()}px`;
    let xPosition=window.innerWidth*Math.random();
    let yPostion=window.innerHeight*Math.random();
    particle.style.left=`${xPosition}px`;
    particle.style.top=`${yPostion}px`;


    particle.style.backgroundColor=`rgb(${225*(0.25+Math.random())} ${225*(0.25+Math.random())} ${225*(0.25+Math.random())})`;

    xIncrements.push(1);
    yIncrements.push(1);

    let timeToMove1px_x=1+(50*Math.random());
    let timeToMove1px_y=1+(50*Math.random());

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
        changeDirAtEdges(innerWidth,particleLeft,particleNumber,xIncrements,xDirectionPositives);
        if (collisionDetected(particle)){
            xIncrements[particleNumber]=-xIncrements[particleNumber];
        }

    },timeToMove1px_x)
}


function moveParticle_y(particle,timeToMove1px_y,particleNumber){
    yDirectionPositives[particleNumber]=true;
    setInterval(()=>{
        let particleTop=particle.style.top.substring(0,particle.style.top.length-2);
        particle.style.top=`${parseInt(particleTop)+yIncrements[particleNumber]}px`;
        changeDirAtEdges(innerHeight,particleTop,particleNumber,yIncrements,yDirectionPositives);

        if (collisionDetected(particle)){
            yIncrements[particleNumber]=-yIncrements[particleNumber];
        }
    },timeToMove1px_y)
}

//for x movement, innerHorW=innerHeight, particleLorR=topPositionOfParticle, dIncrements=yIncrements, xOrYDirectionPositives=yDirectionPositives
//for y movement,   ,,     =innerWidth,  ,,          =left,,                ,  ,,       =x ,,        , ,,                   =x ,,
function changeDirAtEdges(innerHorW,particleLorR, particleNumber,dIncrements,xOrYDirectionPositives){
    if(innerHorW-20<=parseInt(particleLorR) && xOrYDirectionPositives[particleNumber]){
        dIncrements[particleNumber]=-dIncrements[particleNumber]
        xOrYDirectionPositives[particleNumber]=!xOrYDirectionPositives[particleNumber];
    }
    if (parseInt(particleLorR)<=0 && !xOrYDirectionPositives[particleNumber]){

        dIncrements[particleNumber]=-dIncrements[particleNumber];
        xOrYDirectionPositives[particleNumber]=!xOrYDirectionPositives[particleNumber];
    }
}


//set movement for particles
for (let i=0;i<numberOfParticles;i++){
    moveParticle_x(particles[i],timesToMove1px_x[i],i);
    moveParticle_y(particles[i],timesToMove1px_y[i],i);
}

circle.addEventListener('mouseenter',(e)=>{
    circleFound=true;
    circle.style.backgroundColor='red';
    // circle.style.left=`${e.clientX-length/2}px`;
    //  circle.style.top=`${e.clientY-length/2}px`

})

window.addEventListener('mousemove',(e)=>{
    //console.log(3)
    if(circleFound){
        circle.style.left=`${e.clientX-radius/2}px`;
        circle.style.top=`${e.clientY-radius}px`;
    }
})

function collisionDetected(particle){
    let particleX=parseInt(particle.style.left.substring(0,particle.style.left.length-2));
    let particleY=parseInt(particle.style.top.substring(0,particle.style.top.length-2));

    let circleX=parseInt(circle.style.left.substring(0,circle.style.left.length-2));
    let circleY=parseInt(circle.style.top.substring(0,circle.style.top.length-2));

    return radius+parseInt(particle.style.width.substring(0,particle.style.width.length-2))
        >=Math.hypot(particleY-circleY,particleX-circleX);
}

