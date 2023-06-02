import boto3
import json

# Define the DynamoDB table name
table_name = 'resume-challenge'

# Create a DynamoDB client object
dynamodb = boto3.resource('dynamodb')

# Get the DynamoDB table object
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    # Get the current visitor count from the table
    response = table.get_item(
        Key={
            'id': 'visitor-count'
        }
    )
    visitor_count = response.get('Item', {'count': 0})['count']

    # Increment the visitor count
    visitor_count += 1

    # Update the visitor count in the table
    table.put_item(
        Item={
            'id': 'visitor-count',
            'count': visitor_count
        }
    )

    # Return the visitor count as a string
    return str(visitor_count)