var React = require('react');
var ReactDOM = require('react-dom');

var WarmButton = React.createClass({
	propTypes: {
		onValueUpdated: React.PropTypes.func,
	},
	update: function() {
		this.props.update('warm');
	},
	render: function() {
		return (
			<button onClick = {this.update}>Warm Colors</button>
		)
	}
});

var CoolButton = React.createClass({
	propTypes: {
		onValueUpdated: React.PropTypes.func,
	},
	update: function() {
		this.props.update('cool');
	},
	render: function() {
		return (
			<button onClick = {this.update}>Cool Colors</button>
		)
	}
});

var AllButton = React.createClass({
	propTypes: {
		onValueUpdated: React.PropTypes.func,
	},
	update: function() {
		this.props.update('all');
	},
	render: function() {
		return (
			<button onClick = {this.update}>All Colors</button>
		)
	}
});

// Let's create a "real-time search" component

var Search = React.createClass({

    getInitialState: function(){
        return { searchString: '' , libraries: this.props.items };
    },

	update: function(value) {
	  	if(value === 'warm') {
	  		this.setState({libraries: [ { name: 'Strawberry' },
	  								    { name: 'Apple' },
									    { name: 'Watermelon' },
									    { name: 'Cherry' },
									    { name: 'Raspberry' },
									    { name: 'Orange' }
	  								]});
	  	};
	    if(value === 'cool') {
	  		this.setState({libraries: [ { name: 'Blueberry' },
									    { name: 'Grape' },
									    { name: 'Blackberry' },
									    { name: 'Kiwi' },
									    { name: 'Lime' },
									    { name: 'Pear' }
	  								]});
	  	};
	  	if(value === 'all') {
	  		this.setState({libraries: [ { name: 'Strawberry' },
										{ name: 'Apple' },
									    { name: 'Watermelon' },
									    { name: 'Cherry' },
									    { name: 'Raspberry' },
									    { name: 'Orange' },
									    { name: 'Blueberry' },
									    { name: 'Grape' },
									    { name: 'Blackberry' },
									    { name: 'Kiwi' },
									    { name: 'Lime' },
									    { name: 'Pear' },
	  								]});
	  	};
  	},

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var libraries = this.state.libraries,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
        			<p> Search fruit or sort by clicking on the buttons. </p>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                    
	        		<div>
		        		<AllButton update={this.update}></AllButton>
		        		&nbsp;
		        		<WarmButton update={this.update}></WarmButton>
		        		&nbsp;
		        		<CoolButton update={this.update}></CoolButton>
	        		</div>

                    <ul> 

                        { libraries.map(function(l){
                            return <li>{l.name}</li>
                        }) }

                    </ul>

                </div>;

    }
});


var libraries = [

    { name: 'Strawberry' },
    { name: 'Apple' },
    { name: 'Watermelon' },
    { name: 'Cherry' },
    { name: 'Raspberry' },
    { name: 'Orange' },
    { name: 'Blueberry' },
    { name: 'Grape' },
    { name: 'Blackberry' },
    { name: 'Kiwi' },
    { name: 'Lime' },
    { name: 'Pear' }

];

// Render the Search component on the page

ReactDOM.render(

    <Search items = { libraries } />,
    document.getElementById('container')

);

