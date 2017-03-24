/*
Composition-- make big components with (lots of) smaller components. 
We should take the same approach with functions.
*/

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'https://photo.fb.com/' + this.props.username} />
    )
  }
})

var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.fb.com/' + this.props.username}>
        {this.props.username}
      </a>
    )
  }
})

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    )
  }
})

<Avatar username="AndyLeonard" />