import React from 'react'

function Login() {
  return (
    <div>
    <div className="modal fade login-modal-main" id="bd-example-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="login-modal">
                        <div className="row">
                           
                            <div className="col-lg-12 pad-left-0">
                                <button type="button" className="close close-top-right" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i className="mdi mdi-close" /></span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <form  noValidate>
                                    <div className="login-modal-right">
                                        {/* Tab panes */}
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="login" role="tabpanel">
                                                <h5 className="heading-design-h5">Login to your account</h5>
                                                <fieldset className="form-group">
                                                    <label>Enter Email Address</label>
                                                    <input type="email" className="form-control" name="email" placeholder="Enter Email Address" value="" />
                                                   
                                                </fieldset>
                                                <fieldset className="form-group">
                                                    <label>Enter Password</label>
                                                    <input type="password" className="form-control" name="password" placeholder="******" />
                                                   
                                                </fieldset>
                                                   
                                             
                                                <fieldset className="form-group">
                                                    <button type="submit" className="btn btn-lg btn-secondary btn-block" >Login to your account</button>
                                                </fieldset>
                                             
                                            </div>
                                            <div className="tab-pane" id="register" role="tabpanel">
                                                {/* <Register /> */}
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                        <div className="text-center login-footer-tab">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#login" role="tab"><i className="mdi mdi-lock" /> LOGIN</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#register" role="tab"><i className="mdi mdi-pencil" /> REGISTER</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Login