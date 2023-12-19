import React, { Component } from 'react'
 class EditBlogs extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           titre: "",
           auteur:"",
           description:"",
           sousTitre:""
        }
      }
      handleTitreChange = event =>{
      
        this.setState({
            titre: event.target.value
        })
    }
    handleAuteurChange = event =>{
        this.setState({
            auteur: event.target.value
        })
    }
    handleDescriptionChange = event =>{
        this.setState({
            description: event.target.value
        })
    }
    handleSousTitreChange = event =>{
        this.setState({
            sousTitre: event.target.value
        })
    }

    handleSubmit = event =>{
        alert('Blog modifier !')
        event.preventDefault();
    }
  
  render() {
    const { titre, auteur, description, sousTitre } = this.state;

    return (
      <div className='form'>
      
     
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Titre </label>
					<input
						type="text"
						value={titre}
                        onChange={this.handleTitreChange}
                        className='input1'
					/>
				</div>
                <div>
					<label>Sous-titre </label>
					<input
						type="text"
						value={sousTitre}
                        onChange={this.handleSousTitreChange}
                        className='input1'
					/>
				</div>
                <div>
					<label>Auteur </label>
					<input
						type="text"
						value={auteur}
                        onChange={this.handleAuteurChange}
                        className='input1'
					/>
				</div>

				<div>
					<label>Description</label>
					<textarea
						value={description}
                        onChange={this.handleDescriptionChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
        </div>

    )
  }
}

export default EditBlogs