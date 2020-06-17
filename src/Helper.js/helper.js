
importing
index.htm <- src/index.js <- src/app.js <- src/Components/Parent.js <- Header.js, Footer.js, body.js

-----------------------------------------------
render() {
    return(
      <div>
        Hi
      </div>
    );
  }

  gets converted to ->->

  React.createElement("div", null, "Hi");
-------------------------------------------------

//setState takes to value -> setsetate value, call back

setState(
  { name: "Michael" },() => console.log(this.state));

setState(
  { name: "Michael" },this.somefunction);

---------------------------------------------------

defining constructor

constructor(props){
    super(props)
      this.state = {
        value: 2,
        name: "Shreya"
      }
    this.clickHandler = this.clickHandler.bind(this); // if we are using normal functions we need to bind
  }

--------------------------------------------------
Next.js -> SSR
