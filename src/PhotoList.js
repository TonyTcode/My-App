import React, {Component} from 'react'

class PhotoList extends Component {
    render() {
        let photoItems = this.props.photos.map(photo => {
            return <div>{photo.title}</div>
        })
        return <div>{photoItems}</div>
    }
}
export default PhotoList