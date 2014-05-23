class Photo < ActiveRecord::Base
  has_attached_file :photo,
                    styles: { medium: "300x300>", thumb: "100x100>" },
                    storage: :s3,
                    #, :default_url => "/images/:style/missing.png"
  validates_with AttachmentContentTypeValidator, content_type: ["image/jpeg", "image/gif", "image/png"]
  validates_with AttachmentPresenceValidator, attributes: :photo

  def s3_credentials
    { bucket: 'sugarsnapper',
      access_key_id: ENV['AWSAccessKeyId'],
      secret_access_key: ENV['AWSSecretKey'],
      region: ENV['AWSRegion'],
      s3_permissions: :private}
  end


end