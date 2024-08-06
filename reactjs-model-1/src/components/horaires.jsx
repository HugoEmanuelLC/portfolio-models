import React, { useState } from 'react';

export default function Horaires() {

    return (
        <section id='horaires' className="horaires">
            <div className="container">
                <div className="horaires__content">
                    <h2>Horaires</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Du lundi au Jeudi</td>
                                <td>&nbsp;de 10h à 20h</td>
                            </tr>
                            <tr>
                                <td>Les vendredis</td>
                                <td>&nbsp;de 10h à 21h</td>
                            </tr>
                            <tr>
                                <td>Les samedis</td>
                                <td>&nbsp;de 17h à 21h</td>
                            </tr>
                            <tr>
                                <td>Les Dimanches</td>
                                <td>&nbsp;de 17h à 20h</td>
                            </tr>
                
                            <tr>
                                <td style={{fontSize: '85%'}} colSpan="3">Nous fermons de 15h à 17h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}