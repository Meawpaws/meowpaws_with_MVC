<?php include_once './views/inc/header.inc.php' ?>
<?php include_once './views/inc/navbarUser.inc.php' ?>
    <div class="row">
        <div class="col-md-6 mx-auto mt-4">
            <div class="card card-body p-3">
                <h2>Create Account</h2>
                <span class="mb-2">*Please fill all the information to Create your Account</span>
                <form id="login">
                    <!-- email input -->
                    <div class="form-group">
                        <span for="email">Email<sup>*</sup></span>
                        <input type="text" name="email" class="form-control form-control-lg">
                        <span class="invalid-feedback" id="email"></span>
                    </div>
                    <!-- password input -->
                    <div class="form-group">
                        <span for="password">Password<sup>*</sup></span>
                        <input type="password" name="password" class="form-control form-control-lg">
                        <span class="invalid-feedback" id="password"></span>
                    </div>
                    <div>
                        <input type="submit" value="Log In" class="btn btn-primary">
                        <a href="<?= URLROOT ?>users/register" class="btn btn-secondary">You Have not an account ? Register </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php include_once './views/inc/footer.inc.php' ?>
<!-- is-invalid -->