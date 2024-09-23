import React from 'react'


const TERM_OPTIONS = [15,30]

function TermSelect() {
    return (
        <div className="form-group row">
            <label className='col col-form-label'>Loan Term (years)</label>
            <div className=' col-sm-6'>

                <select className='form-control' name="term">
                    {TERM_OPTIONS.map(term=><option key={term} value={term}>{term}</option>)}
                </select>
            </div>
        </div>
    )
}

export default TermSelect
