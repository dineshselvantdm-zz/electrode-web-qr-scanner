import React from "react";
import QrReader from 'react-qr-reader';

/*
 * Demo for qr code scanner
 */
const qRContainer = {
  paddingBottom: "120px"
}

const qRvalue = {
  fontWeight: "bold"
}

class QRCodeScanner extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'Scanning QR code...',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <h6 className="custom__docs-header___3g34Q">QR Scanner for Web</h6>
        <div style={qRContainer}>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />
        </div>
        <div style={qRvalue}>Scanned QR Code Value : {this.state.result}</div>
      </div>
    )
  }
}

export default QRCodeScanner;
