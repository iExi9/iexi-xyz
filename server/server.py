from os import name
from flask import Flask,request,jsonify
from discord_webhook import DiscordWebhook, DiscordEmbed
from flask.scaffold import F
app = Flask(__name__)

from flask_cors import CORS, cross_origin
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/contact',methods=["POST"])
def contact():
    webhook = DiscordWebhook(url='https://discord.com/api/webhooks/885583487522983986/lbapw9UzU_TRzUpxzp5d8N-k26h-vTMEIbA-coVd81wt0BCl3qKqPv8nlXWgqxWAOmF-')
    embed = DiscordEmbed(title=f'Someone contact you iExi!', color='03b2f8')
    embed.add_embed_field(name='Name',value=f'```\n{request.json["name"]}\n```',inline=False)
    embed.add_embed_field(name='Email',value=f'```\n{request.json["email"]}\n```',inline=False)
    embed.add_embed_field(name='Text',value=f'```\n{request.json["text"]}\n```',inline=False)
    webhook.add_embed(embed)
    webhook.execute()
    return jsonify({'status_message':True})

if __name__ == '__main__':
    app.run(debug=True)