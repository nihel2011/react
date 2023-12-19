import React, { Component } from 'react'

export class Formulaire extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comments:"",
         topic:"react"
      }
    }
    handleUsernameChange = event =>{
        if(event.target.value.length <6)
        {
            console.log("Username must be at least 6 characters");
        }
        else{
            console.log("good username");
        }
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`Salut le monde : ${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }


  render() {
    const { username, comments, topic } = this.state;
    return (
        <div>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username </label>
					<input
						type="text"
						value={username}
                        onChange={this.handleUsernameChange}
                        className='input1'
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						value={comments}
                        onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
        </div>
    )
  }
}

export default Formulaire