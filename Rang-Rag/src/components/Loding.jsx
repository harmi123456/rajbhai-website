import React from 'react'

export default function Loding() {
    return (
        <div>
            <div className="loader">

                <div class="loading">
                    <svg class="orange">
                        <g fill="none">
                            <rect x="2" y="2" width="50" height="50" />
                        </g>
                    </svg>
                    <svg class="grey">
                        <g fill="none">
                            <rect x="5" y="5" width="44" height="44" stroke="#ccc" stroke-width="2" />
                        </g>
                    </svg>
                </div>

            </div>
        </div>
    )
}
