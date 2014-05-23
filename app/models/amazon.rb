class Amazon < ActiveRecord::Base

  def self.presigned_post
    AWS.config({
      access_key_id: ENV['AWSAccessKeyId'],
      secret_access_key: ENV['AWSSecretKey'],
      region: ENV['AWSRegion']})
    @s3 = AWS::S3.new
    @bucket = @s3.buckets['sugarsnapper']
    @bucket.presigned_post(:key => "images/${filename}")
  end

end