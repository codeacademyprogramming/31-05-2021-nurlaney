import React from 'react'
import { DashIcon } from './DashIcon';

export const Weather = () => {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-7'>
                    <input className='form-control' />
                </div>
                <div className='col-3 flex-column d-flex'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Default checked radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Default checked radio
                        </label>
                    </div>
                </div>
                <div className='col-10 mt-3'>
                    <ul>
                        <li><DashIcon /> dsdsd</li>
                        <li><DashIcon /> dsdsd</li>
                        <li><DashIcon /> dsdsd</li>
                        <li><DashIcon /> dsdsd</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
