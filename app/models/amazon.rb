class Amazon

  def self.presigned_post
    AWS.config({
      access_key_id: ENV['UserAccessKeyId'],
      secret_access_key: ENV['UserSecretAccessKey'],
      region: ENV['AWSRegion']})
    @s3 = AWS::S3.new
    @bucket = @s3.buckets['sugarsnapper']
    @form = @bucket.presigned_post(:key => "images/${filename}")
  end

end