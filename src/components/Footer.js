import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="text-muted">© 2022 Dan To</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a href='https://github.com/Dan-To-GitHub'>GitHub</a></li>
                    <li class="ms-3"><a href='https://www.linkedin.com/in/danyoungto/'>LinkedIn</a></li>
                </ul>
            </footer>
        </div>
    );
}