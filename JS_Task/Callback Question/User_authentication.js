function login(callback){
    setTimeout(()=>{
        console.log("User authentication");
        callback();
    },1000);
    }
    function getProfile(callback){
        setTimeout(()=>{
            console.log("Profile fetched");
            callback();
        },1000);
    }
    login(()=>{
        getProfile(()=>{
            console.log("Displaying profile");
        });
    });
