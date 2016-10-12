        /*
        LIST OF OPTIONS HERE
        var ={
            name:
            desc:
            cost:
        }
        */
//difficulty options.  These are for setting your base points.
var easy={
    name:"Easy Mode",
    desc:"",
    cost:40
};
var medium={
    name:"Medium Mode",
    desc:"",
    cost:20
};
var hard={
    name:"Hard Mode",
    desc:"",
    cost:0
};
var slaveToTheShow={
    name:"Slave to the Show Mode",
    desc:"",
    cost:-150
};
var anonMustDie={
    name:"Anon Must Die Mode",
    desc:"Minimum of 3 owners, minimum of 5 punishments, maximum of 1 job.",
    cost:-200
};


//body options
var newBody={
    name:"Build-A-Body",
    desc:"You are creating your own custom base form from the provided list of options.",
    cost:40
};
var oldBody={
    name:"Keep Your Old Body",
    desc:"You are going to keep the base form you inhabit right now.",
    cost:20
};


//CYOA options.  
var addDick ={
    name:"Add Dick", 
    desc:"Extra penises start at 5\" length/0.8\" girth.  One purchase allows any number of extra dicks.  Cannot be sexless.", 
    cost:-5 
};
var addTesticles={
    name:"Add Testicles",
    desc:"Extra pairs of testacles start at normal size.  One purchase allows any number of pairs of testicles.  Requires at least one penis",
    cost:-5
};
var addBreasts={
    name:"Add Breasts",
    desc:"Extra pairs of breasts start at B-cup.  One purchase allows any number of extra breasts.",
    cost:-5
};
//below this line has not been added.
var hyperFertileVagina={
    name:"Hyperfertile Vagina",
    desc:"Your vagina will be *upgraded* to a hyperfertile version.  Requires a fertile vagina.",
    cost:10
};
var hormones={
    name:"Hormones",
    desc:"You will receive hormone treatment to make your body more feminine physically.",
    cost:-1
};
var hairRemoval={
    name:"Hair Removal" ,
    desc:"We'll permanently remove any hair on your body that you don't want." ,
    cost: -1
};
var masochist={
    name:"Masochist" ,
    desc:"You now feel pleasure from pain.",
    cost: -3
};
var extremeMasochist={
    name:"Extreme Masochist",
    desc:"You still feel the pain, causing you to become 'confused'.  Requires Masochist",
    cost: 2
};
var manualControl={
    name:"Manual Control" ,
    desc:"You can choose whether or not you feel pleasure from pain.  Requires Masochist.",
    cost: -2
};
var cumConnoisseur={
    name:"Cum Connoisseur",
    desc:"You love the taste of semen.  Not only do you find it to be delicious, but it acts as an aphrodisiac that wears off after about an hour.",
    cost: 1
};
var sensitiveBody ={
    name:"Sensitive Body",
    desc:"Your entire body is now extra sensitive.",
    cost: 1
};
var erogenousBody={
    name:"Erogenous Body",
    desc:"Your entire body is now an erogenous zone.  Requires Sensitive Body.",
    cost: 3
};
var selectiveErogenousBody={
    name:"Selective Erogenous Body",
    desc:"You can choose what parts of your body act as erogenous zones.  Requires Erogenous Body.",
    cost: -3
};
var rightMomentErogenousBody={
    name:"Right Moment Erogenous Body",
    desc:"Your body's erogenous zones will only be 'active' when you're horny.  Requires Erogenous Body.",
    cost: -1
};
var amputee={
    name:"Amputee",
    desc:"You can choose any of your four limbs to have cut off permanently.  Cannot be taken with Detachable Limbs or Android.",
    cost: 15
};
var quadAmputee={
    name:"Quadruple Amputee",
    desc:"All four of your limbs are cut off, permanently.  Cannot be taken with Detachable Limbs or Android.",
    cost: 100
};
var accessible={
    name:"Accessible",
    desc:"Your living space will be modified to make it more accessible to you.  Requires Apartment or higher.",
    cost: -10
};
//===================
var prosthetics={
    name:"Prosthetics",
    desc:"Well will provide state of the art artificial limbs for all of your limbs that were cut off... after the show.",
    cost:-20
};
var magicHair={
    name:"Magic Hair",
    desc:"Your body will maintain a constant length of hair \(on your head\).",
    cost:-1
};
var refractoryPeriod={
    name:"Refractory Period",
    desc:"You no longer have to deal with a refractory period.",
    cost:-1
};
var menstruationControl ={
    name:"Menstruation Control",
    desc:"You no longer have to deal with menstruation or its effects.",
    cost:-1
};
var gagReflex ={
    name:"Gag Reflex",
    desc:"Your gag reflex is removed.",
    cost:-1
}; 
var flexibleHoles ={
    name:"Flexible Holes",
    desc:"Makes all of your holes much more flexible than they would be naturally. Also increases natural lubrication.",
    cost:-1
};
var tightFit={
    name:"Tight Fit",
    desc:"You can accomodate almost anything, but always just barely.  Every time will be like the first.  Must have Flexible Holes.",
    cost:2
};
var easyFit={
    name:"Easy Fit",
    desc:"You can accomodate anything with ease.  Sit back and enjoy the ride.  Must have Flexible Holes.",
    cost:-2
}  
var openCervix={
    name:"Open Cervix",
    desc:"Your womb can be entered with little effort.  Requires a vagina.",
    cost:-1
}  

//begin copy paste try
var fuckableNipples={
    name: "Fuckable nipples",
    desc: "You can now have nipple sex.",
    cost:-1
};
var tattoo={
    name: "Tattoo",
    desc:  "Add a tattoo anywhere on your body. Gives +1 credit for 'lewd' tattoos (e.g. a dick).",
    cost:1
};
var piercing={
    name: "Piercing",
    desc:  "Add a piercing anywhere on your body. Gives +1 credit for piercings in the following 'lewd' locations: tongue, navel, nipples, clit, septum, vagina, penis(es).",
    cost:1
};
var symbolShapedPupils={
    name: "Symbol-shaped pupils",
    desc:  "Change the shape of your pupils to whatever you want.",
    cost:-1
};
var indicator={
    name: "Indicator",
    desc:  "Your pupils will only change shape when you're horny. Requires Symbol-Shaped Pupils",
    cost:-1
};
var heterochromia ={
    name: "Heterochromia",
    desc:  "Select two eye colors (one for each eye) instead of one.",
    cost:-1
};
var tentacleDick={
    name: "Tentacle dick",
    desc:  "Your penis(es) will be turned into prehensile tentacles. Requires at least one penis.",
    cost:-2
};
var elasticTongue={
    name: "Elastic tongue",
    desc:  "You can now extend your tongue up to 12 inches outside of your mouth.",
    cost:-2
};
var alwaysPerky={
    name: "Always perky",
    desc:  "You no longer need to wear a bra.",
    cost:-1
};
var zincSupplements={
    name: "Zinc supplements",
    desc:  "Doubles your natural semen production. Requires at least one penis.",
    cost:-1
};
var lactation={
    name: "Lactation",
    desc:  "Your body will be modified to make your breasts produce milk. Requires at least one set of A-cup or larger breasts.",
    cost:-1
};
