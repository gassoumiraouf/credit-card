import React from 'react';
const Card= ()=>{
    return <div className="container"style={{  
        backgroundImage: "url(" + "https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
    <h1 className="title">CREDIT CARD</h1>
    <div className="image">
        <img src="http://www.transparentpng.com/thumb/sim-card/57vXcA-red-sim-card-transparent-picture.png"></img>
    </div>
    <div className="serial-number" style ={{
        fontSize: '2em',
        paddingLeft: '10px',
        color:'#fcb423',
    }}>
        <p>72564521 2556558</p>
    </div>
    <div className="numbers">
    <div className="number"><p>5642</p>
    <p>valid-thru</p>
        </div>
    <div className="master-card">
        <img src ="https://img.etimg.com/thumb/height-480,width-640,imgsize-114814,msid-60955286/.jpg"></img>

    </div></div>

</div>
}
export default Card
