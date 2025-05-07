from flask import Flask, render_template, request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from models.forms import db, Contact, ContactForm
import requests


app = Flask(__name__ , template_folder= 'templates', static_folder='static',static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'Bodke@432'
app.config['RECAPTCHA_PUBLIC_KEY'] = '6LfZluEqAAAAAF6Z5iukrIOUpiGbNgC9BSIb-y4i'
app.config['RECAPTCHA_PRIVATE_KEY'] = '6LfZluEqAAAAAOVndyb_9sM9h4EBcCAGIE13MZKz'


db.init_app(app)


@app.route("/")
def home():
    return render_template("index1.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/project")
def project():
    return render_template("project.html")


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()

    if request.method == "POST":
        recaptcha_response = request.form.get("g-recaptcha-response")
        recaptcha_secret = app.config['RECAPTCHA_PRIVATE_KEY']

        # Verify reCAPTCHA with Google
        verification_url = "https://www.google.com/recaptcha/api/siteverify"
        response = requests.post(verification_url, data={
            'secret': recaptcha_secret,
            'response': recaptcha_response
        })
        result = response.json()

        if not result.get('success'):
            flash("reCAPTCHA verification failed. Please try again.", "danger")
            return redirect(url_for("contact"))

        # Process the form after reCAPTCHA verification
        if form.validate_on_submit():
            new_message = Contact(
                name=form.name.data,
                email=form.email.data,
                message=form.message.data
            )
            db.session.add(new_message)
            db.session.commit()
            flash('Message sent successfully!', 'success')
            return redirect(url_for('contact'))

    return render_template('contact.html', form=form, recaptcha_site_key=app.config['RECAPTCHA_PUBLIC_KEY'])

if __name__ == "__main__":
      with app.app_context():
        db.create_all()
        app.run(host='0.0.0.0',debug=True)