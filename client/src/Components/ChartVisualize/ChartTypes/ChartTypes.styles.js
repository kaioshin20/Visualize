export default theme=>({
    selectedButtonColor:{
        [theme.breakpoints.between('md','lg')]:{
            height:'85px',
            width:'65px'
        },
        [theme.breakpoints.up('lg')]:{
            height:'100px',
            width:'85px'
        },
        height:'85px',
        width:'75px',
        backgroundColor:'#e8eaf6'    
    },
    container:{
        marginTop:theme.spacing(2)
    },
    icon:{
        display:'block',
        [theme.breakpoints.up('lg')]:{
            height:'50px',
            width:'50px',
            marginLeft:'2px'  
        },
        [theme.breakpoints.between('md','lg')]:{
            marginLeft:0
        },    
        marginLeft:'3px'
    },
    label:{
        display:'block',
        fontSize:'0.75rem',
        textTransform:'none',
        fontWeight:'normal',
    },
    root:{
        [theme.breakpoints.between('md','lg')]:{
            height:'85px',
            width:'65px'
        },
        [theme.breakpoints.up('lg')]:{
            height:'100px',
            width:'85px'
        },
        height:'85px',
        width:'75px',
        backgroundColor:'#fff'
    }
});