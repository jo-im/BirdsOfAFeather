import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, TextInput } from 'react-native';
var t = require('tcomb-form-native');
var Form = t.form.Form;
var Comment = t.struct({
  Comment: t.String              // a required string
});

var options = {
  fields: {
    Comment: {
      auto: 'none',
      help: 'Please add a comment',
      multiline: true,
    }
  }
};


export default class CommentForm extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {
  	return (
  		<View>
  			<Form
          ref="form"
          type={Comment}
          options={options}
          value={this.state.value}
        />
        <TouchableHighlight style={{height: 36,
                                  width: 180,
                                  backgroundColor: '#48BBEC',
                                  borderColor: '#48BBEC',
                                  borderWidth: 1,
                                  borderRadius: 8,
                                  marginBottom: 10,
                                  alignSelf: 'center',
                                  justifyContent: 'center'}} 
                            underlayColor='#99d9f4'
	                          onPress={() => { 
	                          					let value = this.refs.form.getValue();
	                          					this.props.addComment(value);}} >
          <Text style={{
                        fontSize: 18,
                        color: 'white',
                        alignSelf: 'center'
                      }}>Add Comment</Text>
        </TouchableHighlight>
      </View>
  	)
  }
}