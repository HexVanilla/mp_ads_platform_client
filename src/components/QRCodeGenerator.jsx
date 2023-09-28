import React from 'react'
import QRCode from 'qrcode.react'

const QRCodeGenerator = ({ url }) => {
  return (
    <div>
      <QRCode value={url} size={256} />
      <p>Escanea el Codigo QR para entrar al Sitio.</p>
    </div>
  )
}

export default QRCodeGenerator
