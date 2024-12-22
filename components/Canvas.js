import React, {Component} from "react";

class Canvas extends Component {
    // Class Properties
    canvasRef = React.createRef();
    state = {
        canvasElem: null,
        context: null
    };
    size;
    styles;
    resolution;

    // Constructor
    constructor(props){
        super(props);

        // extract Canvas related properties 
        this.size = props.size;
        this.resolution = props.resolution;
        this.styles = props.styles;

        // Bind the methods to the instance
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    // Overloadded Methods
    componentDidMount(){
        // useEffect's callback functionality
        // Check if the current canvasRef has an instanced context running and saves it to the Component's internal state
        if (this.canvasRef.current){
            this.state.canvasElem = this.canvasRef.current;
            // Set the Canvas' Display Size (The overall element size on the page)
            this.state.canvasElem.style.width = this.size.width + 'px';     
            this.state.canvasElem.style.height = this.size.height + 'px';

            // Set the Canvas' internal Context's coordinate limits
            this.state.canvasElem.width = this.resolution.xLim;
            this.state.canvasElem.height = this.resolution.yLim;
            // Save the modified Canvas Element's context to the Component's internal state
            this.state.context = this.canvasRef.current.getContext("2d");

            // Apply initial context stylings
            Object.keys(this.styles).forEach(key => {
                eval("this.state.context." + key + " = \"" + this.styles[key] + "\";");
            });

            this.state.context.strokeRect(10, 10, 200, 400);
        }


    }

    componentDidUpdate(prevProps){
        // useEffect's dependency array check
    }

    componentWillUnmount(){
        // useEffect's "return"
    }

    render(){
        return (
            <div>
                <canvas
                    className="bg-white -scale-y-100"
                    ref={this.canvasRef}
                >
                </canvas>
            </div>
        )
    }
}

export default Canvas