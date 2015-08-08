var React     = require('react'),
    mui       = require('material-ui'),
    Card      = mui.Card,
    CardTitle = mui.CardTitle,
    CardText  = mui.CardText;

module.exports = React.createClass({
  render : function() {
    return (
      <Card expandable={false}>
        <CardTitle title="Welcome to DarwinBots.js" />
        <CardText>
          This is a web and mobile-first implementation of the
          popular DarwinBots game.
        </CardText>
      </Card>
    );
  }
});
