import React, { Component } from 'react'

export class Tombol extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pesan: `Anda telah mengklik tombol untuk ${this.props.nama}`,
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => {alert(this.state.pesan)}}>klik untuk {this.props.nama}</button>
      </div>
    )
  }
}

export default Tombol