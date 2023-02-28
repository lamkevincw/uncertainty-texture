import datetime
import json
from flask import Blueprint, render_template
from BOFS.util import *
from BOFS.globals import db
from BOFS.admin.util import verify_admin

# The name of this variable must match the folder's name.
my_blueprint = Blueprint('my_blueprint', __name__,
                         static_url_path='/my_blueprint',
                         template_folder='templates',
                         static_folder='static')


@my_blueprint.route("/uncertaintyTask", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def uncertaintyTask(condNum):
    pID = session['participantID']

    if request.method == 'POST':
        if request.form['submitButton'] == "Continue":
            #partDataNum = int(request.form['partDataNum'])
            #print(partDataNum)
			
            #for i in range(0, partDataNum):
                #print(request.form['partData' + str(i)])
            log = db.MyTable()
            log.participantID = session['participantID']
            log.participantData = request.form['participantResponses']
            #    log.longPartData = request.form['longData' + str(i)]
			
            db.session.add(log)
            db.session.commit()
			
            return redirect("/redirect_next_page")

    return render_template("UncertaintyStudy.html", pID=pID, condNum=condNum)
	
@my_blueprint.route("/uncertaintyTaskTraining", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def uncertaintyTaskTraining():
    pID = session['participantID']

    if request.method == 'POST':
        if request.form['submitButton'] == "Continue":
            return redirect("/redirect_next_page")

    return render_template("UncertaintyStudy.html", pID=pID, condNum=0)

@my_blueprint.route("/uncertaintyTaskMain", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def uncertaintyTaskMain():
    return uncertaintyTask(1)
	
# Prolific End Page
@my_blueprint.route("/prolific", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def prolific():
    return render_template("Prolific-End.html")
	
@my_blueprint.route("/uncertaintyTask1", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def interpretationTask1():
    return uncertaintyTask(1)

@my_blueprint.route("/uncertaintyTask2", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def interpretationTask2():
    return uncertaintyTask(2)
	
# @my_blueprint.route("/interpretationTask2", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask2():
#     return interpretationTask(2)
	
# @my_blueprint.route("/interpretationTask3", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask3():
#     return interpretationTask(3)
	
# @my_blueprint.route("/interpretationTask4", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask4():
#     return interpretationTask(4)
	
# @my_blueprint.route("/interpretationTask5", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask5():
#     return interpretationTask(5)
	
# @my_blueprint.route("/interpretationTask6", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask6():
#     return interpretationTask(6)
	
# @my_blueprint.route("/interpretationTask7", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask7():
#     return interpretationTask(7)
	
# @my_blueprint.route("/interpretationTask8", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask8():
#     return interpretationTask(8)
	
# @my_blueprint.route("/interpretationTask9", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask9():
#     return interpretationTask(9)
	
# @my_blueprint.route("/interpretationTask10", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask10():
#     return interpretationTask(10)
	
# @my_blueprint.route("/interpretationTask11", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask11():
#     return interpretationTask(11)
	
# @my_blueprint.route("/interpretationTask12", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask12():
#     return interpretationTask(12)
	
# @my_blueprint.route("/interpretationTask13", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask13():
#     return interpretationTask(13)
	
# @my_blueprint.route("/interpretationTask14", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask14():
#     return interpretationTask(14)
	
# @my_blueprint.route("/interpretationTask15", methods=['POST', 'GET'])
# @verify_correct_page
# @verify_session_valid
# def interpretationTask15():
#     return interpretationTask(15)

@my_blueprint.route("/instructVideo", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def instructVideo():
    if request.method == 'POST':
        if request.form['submitButton'] == "Continue":
			
            return redirect("/redirect_next_page")

    return render_template("instructVideo.html")

@my_blueprint.route("/analysis")
@verify_admin
def analysis():
    results = db.session.query(
            db.Participant.participantID,
            db.func.count(db.MyTable.ID).label('tries')
        ).\
        join(db.MyTable, db.MyTable.participantID == db.Participant.participantID).\
        filter(db.Participant.finished).\
        group_by(db.MyTable.participantID)

    return render_template("analysis.html", results=results)
