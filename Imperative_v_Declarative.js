// Imperative code tells your program how to do something

var numbers = [1,2,3,4]
var total = 0

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

// Declarative code tells it what to do

var numbers = [1,2,3,4]
numbers.reduce(function (previous, current) {
  return previous + current
})

/*

Why is Declarative code better?

-Reduces Side Effects
-Minimize Mutability
-More readable code
-Less Bugs

*/

// JQuery Imperative button toggles--State lives inside the Dom. JQ makes it easy to access it.
$( "#example-btn" ).click(function() {
  $(this).toggleClass( "highlight" )
  $(this).text() === 'Add Highlight'
  ? $(this).text('Remove Highlight')
  : $(this).text('Add Highlight')
})

// React "for the most part" Declarative-- we take state out of Dom and into the component

<ExampleBtn onToggleHighlight={this.handleToggleHighlight} highlight={this.state.highlight}>
  {this.state.buttonText}
</ExampleBtn>

// However when it comes to setting state this is a little more imperative

this.setState({
  highlight: !this.state.highlight,
  buttonText: this.state.buttonText === 'Add Highlight'
  ? 'Remove Highlight'
  : 'Add Highlight'
})