import React from 'react'

export default function ContactMapArea() {
    return (
        <>
            <div className="map_area">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.29367479415!2d88.42368325062068!3d22.576357221821464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1682413357194!5m2!1sen!2sin"
                    width="100%"
                    height={300}
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Contact_Map'
                />
            </div>
        </>
    )
}
