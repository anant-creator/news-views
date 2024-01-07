import React, { Component } from 'react'
import loader from './loader.gif';

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} width="70" alt="loader" />
      </div>
    )
  }
}
